import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';


const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);
    console.log( storedBooks, wishList,  "bookContext");

    return (
        <div className='container mx-auto my-3'>
            Read list: {storedBooks.length}
            Wish list: {wishList.length}

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList />
                </TabPanel>
                <TabPanel>
                    <ListedWishList />
                </TabPanel>
            </Tabs>
        </div>


    );
};

export default Books;


