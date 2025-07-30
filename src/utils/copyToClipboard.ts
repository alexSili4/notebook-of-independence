import { Func } from '@/types/functions.types';

const copyToClipboard = async ({
  onSuccessCallback,
  text,
}: {
  text: string;
  onSuccessCallback: Func;
}): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    onSuccessCallback();
  } catch (err) {}
};

export default copyToClipboard;
