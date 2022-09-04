import React, {useState, useEffect} from "react";
import { FlatList, View } from "react-native";
import Config from 'react-native-config';
import axios from 'axios';

import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { useDispatch } from "react-redux";

const Products = ({navigation}) => {
    const dispatch = useDispatch();
    const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);

    const handleProductSelect = id => {
        navigation.navigate("DetailPage", {id});
    }

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;

    if(loading) {
        return <Loading />;
    }

    if(error){
        return <Error />;
    }

    return <FlatList data={data} renderItem={renderProduct} />
}

export default Products;