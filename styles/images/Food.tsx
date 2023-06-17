import { SvgIcon } from '@mui/material';

function FoodIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 3h-2V2h-2v1H8V2H6v1H4C2.9 3 2 3.9 2 5v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 15H4V8h16v10zM9 10h2v2H9v-2zm0 4h2v2H9v-2zm4-4h2v6h-2v-6zm0 8h2v2h-2v-2z" />
    </SvgIcon>
  );
}

export default FoodIcon