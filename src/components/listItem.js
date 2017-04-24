import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { selectLibrary } = this.props;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state, ownProps) => ({
  expanded: ownProps.library.id === state.selectedLibraryId
});

// const mapDispatchToProps = dispatch => ({
//   selectLibrary: (libraryId) => {
//     dispatch(actions.selectLibrary(libraryId));
//   }
// });
// export default connect(null, mapDispatchToProps)(ListItem);
export default connect(mapStateToProps, actions)(ListItem);
