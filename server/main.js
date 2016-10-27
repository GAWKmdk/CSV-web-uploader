import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 
 Stores = new Mongo.Collection('stores');  
    
    
    Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Stores.findOne( { imageref: item.imageref } );

      if ( !exists ) {
        Stores.insert( item );
      } else {
        console.warn( 'Rejected. This item already exists.' );
      }
    }
  }
});
    
    
    
});
