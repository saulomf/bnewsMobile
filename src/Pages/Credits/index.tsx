import { Text, View } from "react-native";

const TEXT = 'Este app foi desenvolvido com único propósito de participar do processo seletivo da RLV Tecnologia. Todos os dados utilizados são públicos e estão disponíveis para consulta no site do IBGE.';

const Credits = () => {
    return (
        <View className="flex-1 bg-black">
            <View className="m-4 p-4 bg-[#111111] rounded-lg">
                <Text className={`text-[16px] text-[#AAAAAA]`}>{TEXT}</Text>
                <Text className={`text-[16px] text-[#AAAAAA]`}>Desenvolvido por Saulo Mendes Feitosa</Text>
            </View>
        </View>
    );
};

export default Credits;