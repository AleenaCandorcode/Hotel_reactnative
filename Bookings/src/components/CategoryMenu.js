import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'
import Mock from '../consts/Mock'
import Images from '../consts/Images'


const CategoryMenu = ({name,logo}) => {
    return (
      <TouchableOpacity key={name}
      style={{backgroundColor: 'white'}}>
        <Image source={Images[logo]}
        style={{backgroundColor: 'white'}}/>
        <Text style={{backgroundColor: 'white'}}>{name}</Text>
      </TouchableOpacity>
    )
  }

export default CategoryMenu;
