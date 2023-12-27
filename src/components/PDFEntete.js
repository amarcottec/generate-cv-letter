import React from "react";
import { View, Text} from "@react-pdf/renderer";

const PDFEntete = (props) => {

    const {name, email, phone, selectedColor} = props;

    return (
        <View>
        <div style={{ width: "100%",height:"100px",display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: selectedColor}}>
            <Text style={{color: 'white', fontSize: '45px',}}>{name}</Text>
        </div>
        <div style={{ width: "100%",height:"25px",display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "black"}}>
            <Text style={{color: 'white', fontSize: '12px',}}>{phone} | {email}</Text>
        </div>
      </View>
    )
};

    export default PDFEntete;
