import './TreeItem.css';

function TreeItem(props) {
    const { tree, onTreeClick } = props;
    return (
        <div className="tree-item">
            <img src={tree.thumbnailUrl} onClick={() => onTreeClick(tree)} />
            <h4>{tree.title}</h4>
        </div>
    );
}

export default TreeItem;