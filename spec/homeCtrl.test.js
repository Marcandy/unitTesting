describe('homeCtrl', () => {
  let $controller;

  beforeEach( module('ngTests'));

  beforeEach( inject( function( _$controller_ ){
    $controller = _$controller_;
  }));

  describe('setUser', () => {
      it('puts a user on $scope', () => {
        const homeCtrl = $controller( 'homeCtrl', { $scope: {} } );

        expect( homeCtrl.scope.user ).to.equal( undefined );
        homeCtrl.scope.setUser( "John Doe" );
        expect( homeCtrl.scope.user).to.equal('John Doe');
      })
  });
});

//beforeEach something that karma does before going through each function

//setUser sidecases handle if user input empty string or if have different user
