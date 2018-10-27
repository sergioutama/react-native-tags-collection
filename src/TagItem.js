import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Color from "./Color";
import PropTypes from "prop-types";

const TagTheme = {
  Default: "default",
  Outline: "outline"
};

export class TagItem extends React.PureComponent {
  render() {
    const {
      title = "",
      selected = false,
      theme = TagTheme.Outline,
      style,
      selectedStyle,
      titleStyle,
      selectedTitleStyle,
      onPress
    } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          itemStyles.container,
          itemStyles[`${theme}Container`],
          style,
          selected && itemStyles[`${theme}ContainerSelected`],
          selected && selectedStyle
        ]}
      >
        <Text
          style={[
            itemStyles.title,
            itemStyles[`${theme}Title`],
            titleStyle,
            selected && itemStyles[`${theme}TitleSelected`],
            selected && selectedTitleStyle
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const itemStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10,
    padding: 10,
    minWidth: 40,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  defaultContainer: {
    backgroundColor: Color.lightGray
  },
  defaultContainerSelected: {
    backgroundColor: Color.green
  },
  outlineContainer: {
    borderWidth: 1,
    borderColor: Color.lightGray
  },
  outlineContainerSelected: {
    borderWidth: 1,
    borderColor: Color.green
  },
  title: {},
  defaultTitle: {
    fontWeight: "bold",
    color: Color.darkGray
  },
  defaultTitleSelected: {
    fontWeight: "bold",
    color: Color.white
  },
  outlineTitle: {
    color: Color.lightGray
  },
  outlineTitleSelected: {
    color: Color.green
  }
});
