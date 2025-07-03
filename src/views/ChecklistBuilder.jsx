import React from 'react';
import View from "../components/View";
import TabNav from "../components/Nav/TabNav";
import {useLiveQuery} from "dexie-react-hooks";
import {addEmptyItem, checklistDB, updateItem} from "../data/repository";
import Button from "../components/Form/Button";
import Col from "../components/Col";
import Checkbox from "../components/Form/Checkbox";
import TextArea from "../components/Form/TextArea";

const SectionView = ({sectionId, sectionNumber}) => {
    const items = useLiveQuery(async () => {
        return await checklistDB.items
            .where('parentSectionId')
            .equals(sectionId)
            .toArray()
    }, [sectionId])
    if (!items) return null;

    return (
        <Col>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col" className="col-1">Step</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="col-1">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) => (
                        <tr key={item.id}>
                            <th scope="row">{`${sectionNumber}.${idx + 1}`}</th>
                            <td><TextArea children={item.description} /></td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Checkbox name={`setCompleted-${item.id}`} initialValue={item.completed}
                                              action={val => updateItem(item.id, {completed: val})}/>
                                </div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3">
                            <div className="d-flex justify-content-center">
                                <Button name={`addItem-${sectionId}`} text="Add Item" style={{width: '35%'}}
                                        action={() => addEmptyItem(sectionId)}/>
                                <Button name={`addSubsection-${sectionId}`} text="Add Subsection" style={{width: '35%'}}
                                        action={() => alert("work in progress")}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Col>
    )
}

const ChecklistBuilder = () => {
    const sectionList = useLiveQuery(() => checklistDB.sections.toArray());
    if (!sectionList) return null;

    return (
        <View>
            <div>I made this utility to make creating nice looking rocketry checklists easier... think of it as a really fancy to-do list</div>
            <TabNav tabs={
                sectionList.map((s) => ({
                    id: s.id,
                    title: s.name,
                    content: <SectionView sectionId={s.id} sectionNumber={s.sectionNumber}/>
                }))
            }/>
        </View>
    );
};

export default ChecklistBuilder;