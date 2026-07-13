"use client";

import {
  createComment,
  deletePost,
  getPosts,
  toggleLike,
} from "@/actions/post.action";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import toast from "react-hot-toast";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  HeartIcon,
  LogInIcon,
  MessageCircleIcon,
  SendIcon,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  DoodleBolt,
  DoodleDots,
  DoodleSparkle,
  DoodleStar,
  DoodleZigzag,
} from "./decorative/Doodles";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

const SURFACES = [
  "surface-yellow",
  "surface-lavender",
  "surface-peach",
  "surface-cream",
  "surface-pink",
];

const CORNER_ACCENTS = [
  "text-brand-yellow/35",
  "text-brand-purple/35",
  "text-brand-orange/35",
  "text-brand-yellow-secondary/40",
  "text-brand-pink/35",
];

const CORNER_DOODLES = [DoodleSparkle, DoodleStar, DoodleBolt, DoodleZigzag, DoodleDots];

function PostCard({
  post,
  dbUserId,
  index = 0,
}: {
  post: Post;
  dbUserId: string | null;
  index?: number;
}) {
  const { user } = useUser();
  const surfaceClass = SURFACES[index % SURFACES.length];
  const accentClass = CORNER_ACCENTS[index % CORNER_ACCENTS.length];
  const CornerDoodleA = CORNER_DOODLES[index % CORNER_DOODLES.length];
  const CornerDoodleB = CORNER_DOODLES[(index + 2) % CORNER_DOODLES.length];
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLinking, setIsLinking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(
    post.likes.some((like) => like.userId === dbUserId),
  );
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = async () => {
    if (isLinking) return;
    try {
      setIsLinking(true);
      setHasLiked((prev) => !prev);
      setOptimisticLikes((prev) => prev + (hasLiked ? -1 : 1));
      await toggleLike(post.id);
    } catch (error) {
      setOptimisticLikes(post._count.likes);
      setHasLiked(false);
    } finally {
      setIsLinking(false);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || isCommenting) return;
    try {
      setIsCommenting(true);
      const result = await createComment(post.id, newComment);
      if (result?.success) {
        toast.success("Comment added");
        setNewComment("");
      }
    } catch (error) {
      toast.error("Failed to add comment");
    } finally {
      setIsCommenting(false);
    }
  };

  const handleDeletePost = async () => {
    if (isDeleting) return;
    try {
      setIsDeleting(true);
      const result = await deletePost(post.id);
      if (result.success) toast.success("Post deleted successfully");
      else throw new Error(result.error);
    } catch (error) {
      toast.error("Failed to delete post");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card className={`card-hover relative overflow-visible ${surfaceClass}`}>
      <CornerDoodleA className={`doodle absolute -top-2 -right-2 size-4 ${accentClass}`} />
      <CornerDoodleB className={`doodle absolute bottom-4 -left-2 size-4 ${accentClass}`} />
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-5">
          <div className="flex space-x-3 sm:space-x-4">
            <Link href={`/profile/${post.author.username}`}>
              <Avatar className="size-10 sm:size-12">
                <AvatarImage src={post.author.image ?? "/avatar.png"} />
              </Avatar>
            </Link>

            {/* post header & text content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 truncate">
                  <Link
                    href={`/profile/${post.author.username}`}
                    className="font-semibold truncate"
                  >
                    {post.author.name}
                  </Link>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Link href={`/profile/${post.author.username}`}>
                      @{post.author.username}
                    </Link>
                    <span>•</span>
                    <span>
                      {formatDistanceToNow(new Date(post.createdAt))} ago
                    </span>
                  </div>
                </div>
                {/* Check if current user is the post author */}
                {dbUserId === post.author.id && (
                  <DeleteAlertDialog
                    isDeleting={isDeleting}
                    onDelete={handleDeletePost}
                  />
                )}
              </div>
              <p className="mt-3 text-sm text-foreground break-words">
                {post.content}
              </p>
            </div>
          </div>

          {/* post image */}
          {post.image && (
            <div className="img-zoom relative aspect-video rounded-2xl">
              <Image
                src={post.image}
                alt="Post content"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* LIKE & COMMENT BUTTONS */}

          <div className="flex items-center pt-1 space-x-4">
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 text-muted-foreground ${
                  hasLiked
                    ? "text-brand-pink hover:text-brand-pink"
                    : "hover:text-brand-pink"
                }`}
                onClick={handleLike}
              >
                {hasLiked ? (
                  <HeartIcon className="size-5 fill-current" />
                ) : (
                  <HeartIcon className="size-5" />
                )}
                <span>{optimisticLikes}</span>
              </Button>
            ) : (
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground gap-2"
                >
                  <HeartIcon className="size-5" />
                  <span>{optimisticLikes}</span>
                </Button>
              </SignInButton>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2 hover:text-brand-blue"
              onClick={() => setShowComments((prev) => !prev)}
            >
              <MessageCircleIcon
                className={`size-5 ${showComments ? "fill-brand-blue text-brand-blue" : ""}`}
              />
              <span>{post.comments.length}</span>
            </Button>
          </div>

          {/* comment section */}
          {showComments && (
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="space-y-4">
                {/* DISPLAY COMMENTS */}
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <Avatar className="size-8 flex-shrink-0">
                      <AvatarImage
                        src={comment.author.image ?? "/avatar.png"}
                      />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-medium text-sm">
                          {comment.author.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          @{comment.author.username}
                        </span>
                        <span className="text-sm text-muted-foreground">·</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(comment.createdAt))} ago
                        </span>
                      </div>
                      <p className="text-sm break-words">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {user ? (
                <div className="flex space-x-3">
                  <Avatar className="size-8 flex-shrink-0">
                    <AvatarImage src={user?.imageUrl || "/avatar.png"} />
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Write a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[80px] resize-none"
                    />
                    <div className="flex justify-end mt-2">
                      <Button
                        size="sm"
                        onClick={handleAddComment}
                        className="flex items-center gap-2"
                        disabled={!newComment.trim() || isCommenting}
                      >
                        {isCommenting ? (
                          "Posting..."
                        ) : (
                          <>
                            <SendIcon className="size-4" />
                            Comment
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center p-4 border border-border rounded-2xl bg-muted/50">
                  <SignInButton mode="modal">
                    <Button variant="outline" className="gap-2">
                      <LogInIcon className="size-4" />
                      Sign in to comment
                    </Button>
                  </SignInButton>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard;
