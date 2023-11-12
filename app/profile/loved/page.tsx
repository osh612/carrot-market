import Item from "@/app/components/item";
import Layout from "@/app/components/layout";

export default function Loved() {
    return (
        <Layout title="관심목록" canGoBack hasTabBar>
          <div className="flex flex-col space-y-5 pb-10  divide-y">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <Item
                key={i}
                id={i}
                title="iPhone 14"
                price={99}
                comments={1}
                hearts={1}
              />
            ))}
          </div>
        </Layout>
      );
};

