import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getNewsByProductFromAPI } from "../../Services/api";
import { useRoute } from '@react-navigation/native';
import { NewsProps } from "../../Shared/globalTypes";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { formatDate } from "../../Shared/utils";
import { ScrollView } from "react-native-gesture-handler";


const Details = () => {
    const [newsDetails, setNewsDetails] = useState<NewsProps>();
    const route = useRoute();
    const newsId = route.params.newsId;
    const newsProductId = route.params.newsProductId;
    const { data: newsData, isLoading, isError } = useQuery(
      ["newsByProduct"],
      () => getNewsByProductFromAPI(Number(newsProductId)),
      {
        enabled: true
      }
    );

    const setNews = useCallback(() => {
        
        if (newsData?.length) {;
            setNewsDetails(newsData?.find((element: NewsProps) => element.id === Number(newsId)));
        }
    }, [newsData]);

    useEffect(() => {
        setNews();
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

    const Divider = () => (
        <View className="w-full h-[2px] mt-2 mb-2 bg-[#AAAAAA]" />
    );

    return (
        <ScrollView className="m-4 p-4 bg-[#111111] rounded-lg">
            {Boolean(newsDetails?.id) && <>
                <Text className={`text-[18px] text-[#AAAAAA]`}>{newsDetails.titulo}</Text>
                <Divider />
                <View className="flex flex-row justify-between">
                    <Text className={`text-[14px] text-[#999999]`}>Editorias: </Text>
                    <Text className="bg-[#331111] rounded-lg ml-2 p-0.5 pl-2 pr-2 ">{newsDetails.editorias}</Text>
                </View>
                <Text className={`text-[14px] text-[#999999]`}>{`Publicada em ${formatDate(newsDetails.data_publicacao)}h`}</Text>
                <Divider />
                <Text className={`text-[15px] text-[#999999] leading-6`}>{newsDetails.introducao}</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL(newsDetails.link)}
                    className="bg-[#111166] rounded-2xl p-3 mt-4 mb-8 items-center"
                >
                    <Text className={`text-[14px] text-[#999999] font-bold`}>Ler notícia completa</Text>
                </TouchableOpacity>
            </>}
        </ScrollView>
    );
};

export default Details;