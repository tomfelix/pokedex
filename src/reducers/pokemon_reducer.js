export default function(state = [], action) {
  switch(action.type) {
    case 'POKEMON_NAME':
      console.log('reducer dziala');
    default:
      return state;
  }
}
