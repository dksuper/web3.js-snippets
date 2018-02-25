import Controller from '../../lib/controller';
import transactionFacade from './facade';

class TransactionController extends Controller {}

export default new TransactionController(transactionFacade);
