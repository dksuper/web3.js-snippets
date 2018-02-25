import Facade from '../../lib/facade';
import transactionSchema  from './schema';

class TransactionFacade extends Facade {}

module.exports = new TransactionFacade('Transaction', transactionSchema);
