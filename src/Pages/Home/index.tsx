import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import NewsCard from "../../Components/NewsCard";
import { NewsProps } from "../../Shared/globalTypes";
import { useQuery } from "react-query";
import { getNewsFromAPI } from "../../Services/api";

const Home = () => {
    const [pageControl, setPageControl] = useState<number>(1);
    const [searchTerms, setSearchTerms] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [newsList, setNewsList] = useState<NewsProps[]>([]);
    const { data: newsData, isLoading, isError } = useQuery(
        ["news", pageControl, searchTerms],
        () => getNewsFromAPI({
            qtd: 10,
            page: pageControl,
            busca: searchTerms
          }),
        {
          
        }
    );

    useEffect(() => {
        if (newsData?.items.length) {
            setNewsList([...newsList, ...newsData.items]);
        }
    }, [newsData]);

    if (isLoading) {
        return (
            <View className="mh-[22px] rounded-lg m-16">
                <Text className="text-white text-bold text-center">Aguarde enquanto os dados são carregados</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View className="mh-[22px] rounded-lg m-16">
                <Text className="text-white text-bold text-center">Houve um problema ao carregar os dados, tente novamente mais tarde</Text>
            </View>
        );
    }

    return (
        <View>
            <TextInput
                className="bg-[#111111] h-[40px] mt-2 ml-6 mr-6 rounded-lg pl-2"
                onSubmitEditing={() => setSearchTerms(searchValue)}
                onTouchEnd={() => setSearchTerms(searchValue)}
                value={searchValue}
                onChangeText={setSearchValue}
                placeholder="Buscar..."
                placeholderTextColor={'#888888'}
            />
            {Boolean(newsList.length) &&
                <FlatList
                    data={newsList}
                    keyExtractor={(item) => item?.id?.toString()}
                    renderItem={({ item }) => <NewsCard news={item} />}
                    contentContainerStyle={{ padding: 16 }}
                    ListFooterComponent={
                        <TouchableOpacity
                            className="h-[28px] w-[40%] m-8 rounded-lg bg-[#111166] items-center self-center justify-center"
                            onPress={() => setPageControl(pageControl + 1)}
                        >
                            <Text className="text-[12px] text-white text-bold">Carregar Mais</Text>
                        </TouchableOpacity>
                    }
                />
            }
        </View>
    );
};

export default Home;