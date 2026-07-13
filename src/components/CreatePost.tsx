"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ImageIcon, Loader2Icon, SendIcon } from "lucide-react";
import { createPost } from "@/actions/post.action";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import { DoodleSparkle } from "./decorative/Doodles";

function CreatePost() {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim() && !imageUrl) return;
    setIsPosting(true);
    try {
      const res = await createPost(content, imageUrl);
      if (res?.success) {
        setContent("");
        setImageUrl("");
        setShowImageUpload(false);
        toast.success("Post created successfully");
      } else {
        toast.error("Failed to create post");
      }
    } catch (error) {
      console.log("Failed to create post", error);
      toast.error("Failed to create post");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="card-hover relative mb-6 rounded-2xl bg-gradient-to-br from-brand-yellow/60 via-brand-pink/40 to-brand-purple/40 p-[1.5px] shadow-[0_8px_24px_-10px_rgba(255,193,7,0.35)]">
      <Card className="surface-cream relative overflow-visible rounded-2xl border-transparent p-2 sm:p-3">
        <DoodleSparkle className="doodle absolute -top-3 -right-3 size-6 text-brand-yellow" />
        <DoodleSparkle className="doodle absolute -bottom-2 -left-2 size-4 text-brand-pink/70" />
        <CardContent className="pt-4">
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Avatar className="size-11 border-2 border-primary/20">
                <AvatarImage src={user?.imageUrl || "/avatar.png"} />
              </Avatar>
              <Textarea
                placeholder="What's on your mind?"
                className="min-h-[100px] resize-none border-none bg-transparent px-1 focus-visible:ring-0 text-base"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={isPosting}
              />
            </div>

            {(showImageUpload || imageUrl) && (
              <div className="rounded-2xl border border-border bg-card/60 p-4">
                <ImageUpload
                  endpoint="postImage"
                  value={imageUrl}
                  onChange={(url) => {
                    setImageUrl(url);
                    if (!url) setShowImageUpload(false);
                  }}
                />
              </div>
            )}

            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className={`gap-2 rounded-2xl border border-border bg-card/70 text-muted-foreground hover:text-primary ${
                    showImageUpload || imageUrl ? "text-primary" : ""
                  }`}
                  onClick={() => setShowImageUpload(!showImageUpload)}
                  disabled={isPosting}
                >
                  <span className="flex size-5 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/30 to-brand-purple/30">
                    <ImageIcon className="size-3.5 text-brand-blue" />
                  </span>
                  Photo
                </Button>
              </div>
              <Button
                className="glow-yellow flex items-center"
                onClick={handleSubmit}
                disabled={(!content.trim() && !imageUrl) || isPosting}
              >
                {isPosting ? (
                  <>
                    <Loader2Icon className="size-4 mr-2 animate-spin" />
                    Posting...
                  </>
                ) : (
                  <>
                    <SendIcon className="size-4 mr-2" />
                    Post
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatePost;
