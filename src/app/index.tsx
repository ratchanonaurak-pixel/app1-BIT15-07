//นำเข้า วิว , ข้ความ จาก
import { Text, View, StyleSheet, Image } from "react-native"


//ส่งออก เริ่มต้น ฟังก์ชั่น ช่อฟังก์ชั่น
export default function App() {
    return (
        // ใลสไตล์ตกแต่ง
        <View style={myStyle.container}>

            {/*แสดงข้อความ*/}
            <Text style={myStyle.title}>ตูมตามอ้วน168 ทุงทุง</Text>

            {/*แสดงภสพจากไฟล์*/}
            <Image
                source={require('@/assets/images/ตาม.jpeg')}
                style={{
                    width: 200, //กว้าง
                    height: 200, //สูง
                    borderRadius: 100, //ความมนของมุม
                    borderWidth: 10, //ความกว้างของขอบ
                    borderColor: "pink" //
                }}
            />
            {/*ใส่ภาพจากลิงก์*/}
            <Image
                source={{ uri: "https://image.dogilike.com/shareimg/contentimg/2019/pungpond/7-19/Rank/2/1.jpg" }}
                style={{
                    width: 360, //กว้าง
                    height: 300, //สูง
                    borderRadius: 100, //ความมนของมุม
                    borderWidth: 10, //ความกว้างของขอบ
                    borderColor: "pink" // สีของชอบ
                }}
            />
            {/*จัดแนวนอน*/}
            <View style={{ flexDirection: "row" }}>
                {/* fn + e เปิดอิโมจิ*/}
                <Text>cat </Text>
                <Text>cat </Text>
                <Text>cat </Text>
                <Text>cat </Text>
                <Text>cat </Text>
                <Text>cat </Text>



            </View>

</View>
            ) 
   
}

            const myStyle = StyleSheet.create({
                container:{
                // css บนเว็บ -> background-color
                backgroundColor: "red", //สีพื่นหลัง
            flex: 1, // ขยาย
            paddingTop: 80, //เพิ่มช่องว่างด้านบนกล่อง
            alignItems: "center"
    },
            title:{
                color: "blue", //สีอักษร
            fontSize: 26, //ขนาดอักษร
            fontWeight: 700, // ความหนาขนาด
            textAlign: "center", //จัดแนวการวาง

    }

})