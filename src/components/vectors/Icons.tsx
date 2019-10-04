import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

export function LineChartIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
    </SvgIcon>
  );
}

export function AreaChartIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z" />
    </SvgIcon>
  );
}

export function BarChartIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
    </SvgIcon>
  );
}

export function ScatterChartIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M2,2H4V20H22V22H2V2M9,10A3,3 0 0,1 12,13A3,3 0 0,1 9,16A3,3 0 0,1 6,13A3,3 0 0,1 9,10M13,2A3,3 0 0,1 16,5A3,3 0 0,1 13,8A3,3 0 0,1 10,5A3,3 0 0,1 13,2M18,12A3,3 0 0,1 21,15A3,3 0 0,1 18,18A3,3 0 0,1 15,15A3,3 0 0,1 18,12Z" />
    </SvgIcon>
  );
}

export function PieChartIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z" />
    </SvgIcon>
  );
}
