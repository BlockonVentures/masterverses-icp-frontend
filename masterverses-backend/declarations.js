const idlFactory = ({ IDL }) => {
    return IDL.Service({
        'getThreePics': IDL.Func(
            [],
            [IDL.Vec(IDL.Record({
                'id': IDL.Text,
                'image': IDL.Vec(IDL.Nat8)
            }))],
            ['query']
        ),
        'getThreePicsWithDetails': IDL.Func(
            [],
            [IDL.Vec(IDL.Record({
                'id': IDL.Text,
                'image': IDL.Vec(IDL.Nat8),
                'ipfsUrl': IDL.Opt(IDL.Text),
                'description': IDL.Opt(IDL.Text),
                'date': IDL.Opt(IDL.Text),
                'location': IDL.Opt(IDL.Text),
                'price': IDL.Opt(IDL.Text)
            }))],
            ['query']
        ),
        'getTopOrgs': IDL.Func(
          [],
          [IDL.Vec(IDL.Record({
              'name': IDL.Text,
              'ipfsUrl': IDL.Opt(IDL.Text)
          }))],
          ['query']
      ),
      'getNearbyPlaces': IDL.Func(
        [],
        [IDL.Vec(IDL.Record({
            'id': IDL.Text,
            'ipfsUrl': IDL.Opt(IDL.Text),
            'name': IDL.Text,
            'description': IDL.Opt(IDL.Text),
            'date': IDL.Opt(IDL.Text),
            'location': IDL.Opt(IDL.Text),
            'price': IDL.Opt(IDL.Text)
        }))],
        ['query']
    ),
        'getFourPicsFullDetails': IDL.Func(
            [],
            [IDL.Vec(IDL.Record({
                'id': IDL.Text,
                'image': IDL.Vec(IDL.Nat8),
                'ipfsUrl': IDL.Opt(IDL.Text),
                'description': IDL.Opt(IDL.Text),
                'date': IDL.Opt(IDL.Text),
                'location': IDL.Opt(IDL.Text),
                'price': IDL.Opt(IDL.Text)
            }))],
            ['query']
        ),
        'getFeaturedEvents': IDL.Func(
          [],
          [IDL.Vec(IDL.Record({
              'id': IDL.Text,
              'ipfsUrl': IDL.Opt(IDL.Text),
              'name': IDL.Text,
              'date': IDL.Opt(IDL.Text),
              'location': IDL.Opt(IDL.Text),
              'description': IDL.Opt(IDL.Text)
          }))],
          ['query']
      ),
        'getSixPicsWithNames': IDL.Func(
            [],
            [IDL.Vec(IDL.Record({
                'id': IDL.Text,
                'image': IDL.Vec(IDL.Nat8),
                'ipfsUrl': IDL.Opt(IDL.Text),
                'name': IDL.Text
            }))],
            ['query']
        ),
        'addPicture': IDL.Func(
            [
                IDL.Text,                // name
                IDL.Vec(IDL.Nat8),       // image
                IDL.Opt(IDL.Text),       // ipfsUrl
                IDL.Opt(IDL.Text),       // description
                IDL.Opt(IDL.Text),       // location
                IDL.Opt(IDL.Text)        // price
            ],
            [IDL.Text],
            []
        )
    });
  };
  
  module.exports = { idlFactory };