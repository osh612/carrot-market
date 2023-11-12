import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Layout from "@/app/components/layout";
import TextArea from "@/app/components/textarea";

export default function Create() {
    return (
        <Layout canGoBack title="Go Live">
            <form className=" space-y-4 py-10 px-4">
                <Input required label="Name" name="name" type="text" />
                <Input
                    required
                    label="Price"
                    placeholder="0.00"
                    name="price"
                    type="text"
                    kind="price"
                />
                <TextArea name="description" label="Description" />
                <Button text="Go live" />
            </form>
        </Layout>
    );
};