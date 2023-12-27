import React from "react";
import { useState, useEffect } from "react";

const KnowledgeInfo = ({ sendKnowledgeList, saveDataTrigger, deleteDataTrigger }) => {
  const [kowledgeList, setKnowledgeList] = useState([
    { knowledgeTitle: "", KnowledgeDetail: "" },
  ]);

  const handleAddKnowledge = () => {
    setKnowledgeList([
      ...kowledgeList,
      { knowledgeTitle: "", KnowledgeDetail: "" },
    ]);
  };

  useEffect(() =>{
    if (deleteDataTrigger){
      localStorage.setItem("kowledgeList", JSON.stringify(kowledgeList));
    } 
  }, [deleteDataTrigger])

  useEffect(() =>{

    if (deleteDataTrigger) {
      setKnowledgeList([]);
    }

    if(saveDataTrigger){
      localStorage.setItem("kowledgeList", JSON.stringify(kowledgeList));
    }
  }, [saveDataTrigger, kowledgeList]);

  useEffect(() =>{
    const kowledgeListData = localStorage.getItem("kowledgeList");
    if (kowledgeListData) {
      setKnowledgeList(JSON.parse(kowledgeListData));
    }

  }, [])

  useEffect(() =>{
    sendKnowledgeList(kowledgeList);
  }, [kowledgeList])

  const handleKnowledgeChange = (index, field, value) => {
    const newKnowledgeList = [...kowledgeList];
    newKnowledgeList[index][field] = value;
    setKnowledgeList(newKnowledgeList);
    sendKnowledgeList(newKnowledgeList);
  };

  const handleRemoveKnowledge = (index) => {
    const newKnowledgeList = [...kowledgeList];
    newKnowledgeList.splice(index, 1);
    setKnowledgeList(newKnowledgeList);
    sendKnowledgeList(newKnowledgeList);
  };

  return (
    <div>
      <h2>Connaissances Informatique</h2>

      {kowledgeList &&
        kowledgeList.map((knowlege, index) => (
          <div key={index}>
            <input
              type="text"
              name="knowledgeTitle"
              placeholder="Knowledge Title"
              value={knowlege.knowledgeTitle}
              onChange={(e) =>
                handleKnowledgeChange(index, "knowledgeTitle", e.target.value)
              }
            />
            <input
              type="text"
              name="KnowledgeDetail"
              placeholder="Knowledge Detail"
              value={knowlege.KnowledgeDetail}
              onChange={(e) =>
                handleKnowledgeChange(index, "KnowledgeDetail", e.target.value)
              }
            />
            <button onClick={() => handleRemoveKnowledge(index)}>-</button>
          </div>
        ))}
      <button onClick={handleAddKnowledge}>Add Knowledge</button>
    </div>
  );
};

export default KnowledgeInfo;
