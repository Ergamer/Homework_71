import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchItemsList} from "../store/actions";
import InfoItem from "../components/InfoItem";
import {FlatList} from "react-native";

class InfoItems extends Component {

    componentDidMount() {
        this.props.fetchItemsList();
    }


    render () {
        return (
            <FlatList
                data={this.props.items}
                keyExtractor={(item) => item.data.id}
                renderItem= {({item}) => <InfoItem image={item.data.thumbnail} text={item.data.title}/>}
            />
        );
    }

}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsList: () => dispatch(fetchItemsList()),
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (InfoItems);
