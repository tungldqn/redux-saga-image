import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../commons/Button';
import Stats from './Stats';
import './style.css';

class ImageGrid extends Component {
  render(){
    const { loading, images, loadImages, error, stats } = this.props;
    return(
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(
                image.height / image.width,
              )}`}
            >
              <Stats stats={stats[image.id]} />
              <img
                src={image.urls.small}
                alt={image.user.username}
              />
            </div>
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button
          onClick={() => !loading && loadImages()}
          loading={loading}
        >
          Load More
        </Button>
      </div>
    )
  }
}

ImageGrid.defaultProps = {
  images: [],
  loading: false
}

ImageGrid.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool
}

export default ImageGrid