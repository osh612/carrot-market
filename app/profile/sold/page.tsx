import Item from "@/app/components/item";
import Layout from "@/app/components/layout";

export default function Sold() {
    return (
        <Layout title="판매내역" canGoBack hasTabBar>
          <div className="flex flex-col space-y-5 pb-10  divide-y">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <Item
                id={i}
                key={i}
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
