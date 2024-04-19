import { useState, useEffect } from "react"

const content = [
        {
            tab: "section_1",
            content: "I'm the content of the section_1"
        },
        {
            tab: "section_2",
            content: "I'm the content of the section_2"
        }
    ]; 
    const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)){ return }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
    }

    export default function App() {

    const { currentItem, changeItem } = useTabs(0, content);
    console.log(currentItem);

    return (
        <div className="App">
            {content.map((section, i) => {
            return (
                <button onClick={() => changeItem(i)} key={i}>{section.tab}</button>
            )
            })}
            <div>
            {currentItem.content}
            </div>
        </div>
    );
};