import { DefaultProps } from '../../../';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-native-uiw/tree/master/packages/core/src/Loader/README.md"
      renderPage={async () => {
        const md = await import('@uiw/react-native/lib/Loader/README.md');
        return md.default || md;
      }}
    />
  );
}