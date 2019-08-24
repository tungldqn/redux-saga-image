import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageGrid from './components';
import {loadImages} from './actions';

class ImageGridContainer extends Component {
  
  componentDidMount() {
    this.props.loadImages()
  }

  render(){
    return(
      <ImageGrid {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  loading: state.image.grid.loading,
  images: state.image.grid.list,
  error: state.image.grid.error,
  stats: state.image.grid.stats
})

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGridContainer)