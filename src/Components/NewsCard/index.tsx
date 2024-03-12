import { View, Text } from "react-native";
import COLORS from "../../Shared/colors";
import { NewsProps } from "../../Shared/globalTypes";
import { formatDate } from "../../Shared/utils";

type NewsCardProps = {
    news: NewsProps;
};

const NewsCard = ({ news }:NewsCardProps ) => (
    <View className={`min-h-[100] rounded-lg bg-[#111111] justify-between p-4 m-2`}>
        <Text className={`text-[16px] text-[#AAAAAA]`}>{news.titulo}</Text>
        <Text className={`text-[12px] text-white mt-2`}>{`Publicada em ${formatDate(news.data_publicacao)}h`}</Text>
    </View>
);

export default NewsCard;