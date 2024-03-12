import { View, Text } from "react-native";
import COLORS from "../../Shared/colors";
import { NewsProps } from "../../Shared/globalTypes";
import { formatDate } from "../../Shared/utils";

type NewsCardProps = {
    news: NewsProps;
};

const NewsCard = ({ news }:NewsCardProps ) => (
    <View className={`min-h-[100] rounded-lg bg-[${COLORS.gray}]`}>
        <Text className={`text-[18px] text-{${COLORS.white}}`}>{news.titulo}</Text>
        <Text className={`text-[12px] text-white`}>{`Publicada em ${formatDate(news.data_publicacao)}`}</Text>
    </View>
);

export default NewsCard;