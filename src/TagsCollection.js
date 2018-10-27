import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const DefaultKeys = {
  id: "id",
  title: "title"
};

export default class TagsCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: {}
    };
  }

  get totalSelectedTags() {
    return Object.keys(this.state.selectedItems).length;
  }

  get selectedTags() {
    const tags = [];
    Object.entries(this.this.state.selectedItems).forEach(key => {
      tags.push(this.state.selectedItems[key]);
    });
    return tags;
  }

  onSelectItem = item => {
    const {
      idKey = DefaultKeys.id,
      onSelectTag,
      multiSelection = true
    } = this.props;
    const { selectedItems } = this.state;
    const itemKey = item[idKey] || item;
    var currentSelectedItems = { ...selectedItems };
    const foundItem = selectedItems[itemKey];

    // find selected item
    if (foundItem) {
      delete currentSelectedItems[itemKey];
    } else {
      if (!multiSelection) {
        const totalRemainingSelectedItems = Object.keys(currentSelectedItems)
          .length;
        if (totalRemainingSelectedItems > 0) {
          // remove all values as we only care about the last selected value
          currentSelectedItems = {};
        }
      }
      currentSelectedItems[itemKey] = item;
    }

    this.setState({ selectedItems: currentSelectedItems }, () => {
      if (onSelectTag) {
        onSelectTag(item);
      }
    });
  };

  render() {
    const {
      data = [],
      titleKey = DefaultKeys.title,
      idKey = DefaultKeys.id,
      containerStyle,
      ...props
    } = this.props;
    const { selectedItems } = this.state;
    return (
      <View style={[styles.container, containerStyle]}>
        {data.map(item => {
          return (
            <TagItem
              {...props}
              title={item[titleKey] ? item[titleKey] : item}
              key={item[idKey] ? item[idKey] : item}
              onPress={this.onSelectItem.bind(this, item)}
              selected={
                (selectedItems[item[idKey]] || selectedItems[item]) && true
              }
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
});

const textStyles = StyleSheet.create({
  container: {}
});
