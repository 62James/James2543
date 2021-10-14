import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import TreeItem from './components/TreeItem';
import TreePost from './components/TreePost';
import trees from './data/trees';

function App() {
    const [selectedTree, setSelectedTree] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onTreeOpenClick(tree) {
        setSelectedTree(tree);
    }

    function onTreeCloseClick() {
        setSelectedTree(null);
    }

    const treeItems = trees.filter((tree) => {
        return tree.title.includes(searchText);
    }).map((tree, index) => {
        return <TreeItem key={index} tree={tree} onTreeClick={onTreeOpenClick} />;
    });

    let treePost = null;
    if (!!selectedTree) {
        treePost = <TreePost tree={selectedTree} onBgClick={onTreeCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {treeItems}
                    </div>
                </div>
            </section>
            {treePost}
        </div>
    );
}

export default App;
