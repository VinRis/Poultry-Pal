import { ImageResponse } from 'next/og';
import Logo from '@/components/common/logo';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'hsl(94 84% 43%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <Logo
          style={{
            width: '75%',
            height: '75%',
            stroke: 'white',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
