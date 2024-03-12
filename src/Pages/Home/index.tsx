import { FlatList, Text, View } from "react-native";
import useNews from "../../Hooks/useNews";
import { useState } from "react";
import NewsCard from "../../Components/NewsCard";

const Home = () => {
    const [pageControl, setPageControl] = useState<number>(1);
    const { data, isLoading, isSuccess } = useNews(pageControl);

    if (isLoading) {
        return (
            <View className="mh-8 rounded-lg bg-[]">
                <Text>Aguarde enquanto os dados são carregados</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={data.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NewsCard news={item} />}
                contentContainerStyle={{ padding: 16 }}
            />
        </View>
    );
};

export default Home;