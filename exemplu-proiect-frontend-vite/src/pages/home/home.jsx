import AddItem from "../../components/organisms/addItem/addItem"
import AllItems from "../../components/organisms/allItems/allItems"

export const Home = () => {
    return(
        <>
        <div>Add something to your "To do" list</div>
        <AddItem/>
        <AllItems/>
        </>
    )
}