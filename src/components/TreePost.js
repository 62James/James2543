import './TreePost.css';

function TreePost(props) {
    const { tree, onBgClick } = props;
    return (
        <div className="tree-post">
            <div className="tree-post-bg" onClick={onBgClick} />
            <div className="tree-post-content">
                <img src={tree.fullUrl} />
                <h4>{tree.title}</h4>
                <p> 
                    การดูแล :{tree.care} <br/>
                    ราคาโดยประมาณ : {tree.price} <br/>
                    หมายเหตุ : {tree.note} <br/>
                </p>
            </div>
        </div>
    );
}

export default TreePost;