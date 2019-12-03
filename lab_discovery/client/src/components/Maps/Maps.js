import React from 'react';
import { ScrollSync , Grid } from 'react-virtualized';

class Maps extends React.Component {
    render () {
      // These are arbitrary
      const defaultScrollLeft = 300
      const defaultScrollTop = 500
  
      return (
        <ScrollSync>
          {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
            if (!this._initialized) {
              scrollLeft = defaultScrollLeft
              scrollTop = defaultScrollTop
  
              this._initialized = true
            }
  
            return (
              <div>
                <Grid
                //   {...otherSyncedGridProps}
                  scrollLeft={scrollLeft}
                />
                <Grid
                //   {...otherMainGridProps}
                  onScroll={onScroll}
                  scrollLeft={defaultScrollLeft}
                  scrollTop={defaultScrollTop}
                />
              </div>
            )
          }}
        </ScrollSync>
      )
    }
  }
  export default Maps;