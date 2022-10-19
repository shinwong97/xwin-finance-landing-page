import Button from 'react-bootstrap/Button';

function BlockExample(props) {
  return (
    <div className="d-grid gap-2">
      <Button style={{ minWidth:600,padding: 20}} variant="primary" size="lg" className='mx-auto'>
         Click here to open an account
      </Button>
    
    </div>
  );
}

export default BlockExample;