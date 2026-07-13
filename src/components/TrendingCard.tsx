import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DoodleSparkle } from "./decorative/Doodles";

const TRENDS = [
  { tag: "#KlyroLaunch", posts: "1,234", color: "text-brand-pink" },
  { tag: "#WebDev", posts: "8,567", color: "text-brand-orange" },
  { tag: "#NextJS", posts: "3,210", color: "text-success" },
  { tag: "#TailwindCSS", posts: "2,987", color: "text-brand-purple" },
  { tag: "#BuildInPublic", posts: "1,876", color: "text-brand-blue" },
];

function TrendingCard() {
  return (
    <Card className="surface-peach card-hover relative overflow-visible">
      <DoodleSparkle className="doodle absolute -top-2 -right-2 size-4 text-brand-orange/70" />
      <CardHeader>
        <CardTitle className="text-base">Trends for you</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {TRENDS.map((trend) => (
            <div
              key={trend.tag}
              className="flex items-center justify-between rounded-2xl p-2 text-sm transition-colors duration-200 hover:bg-card/70"
            >
              <div>
                <p className={`font-medium ${trend.color}`}>{trend.tag}</p>
                <p className="text-xs text-muted-foreground">{trend.posts} posts</p>
              </div>
              <span className={`text-xs ${trend.color}`}>↗</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 text-sm font-medium text-primary hover:underline"
        >
          Show more →
        </button>
      </CardContent>
    </Card>
  );
}

export default TrendingCard;
