import PropTypes from 'prop-types'

function List(props){
    const lists = props.itemList;
    const listItems = lists.map(list => <li key={list.name}>{list.name} : &nbsp;
    <b>{list.calories}</b></li>);
    return(
        <div className="bg-blue-200 text-red-500 m-[15px] p-[20px] w-max h-max md:w-[300px] md:h-[240px] rounded-[20px] shadow-1xl text-2xl text-center">
            <h1 className="font-bold">{props.category}</h1>
            <ul className="text-left">{listItems}</ul>
        </div>
    );
}
List.propTypes = {
    itemList : PropTypes.array,
    category: PropTypes.string,
}
export default List