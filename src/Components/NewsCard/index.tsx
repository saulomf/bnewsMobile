import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewsProps } from "../../Shared/globalTypes";
import { formatDate } from "../../Shared/utils";

type NewsCardProps = {
    news: NewsProps;
};

const NewsCard = ({ news }:NewsCardProps ) => {
    const { navigate } = useNavigation();
    
    return (
        <TouchableOpacity
            className={`min-h-[100] rounded-lg bg-[#111111] justify-between p-4 m-2`}
            onPress={() => navigate('Details', { newsId: news.id, newsProductId: news.produto_id })}
        >
            <Text className={`text-[16px] text-[#AAAAAA]`}>{news.titulo}</Text>
            <Text className={`text-[12px] text-white mt-2`}>{`Publicada em ${formatDate(news.data_publicacao)}h`}</Text>
        </TouchableOpacity>
    )
};

export default NewsCard;