import patchKeyChainUpdate from 'api/keychains/keychain-update';
import patchKeyChainDelete from 'api/keychains/keychain-delete';

export const handleKeychainSave = async ({ id, inputValues, onClose, onSuccess }: { id?: number; inputValues: string[]; onClose: () => void; onSuccess?: () => void }) => {
  if (!id) {
    alert('수정할 키체인을 찾을 수 없습니다.');
    return;
  }

  const [name, content] = inputValues.map((v) => v.trim());

  if (!name || !content) {
    alert('모든 필드를 입력하세요.');
    return;
  }

  try {
    await patchKeyChainUpdate({ id, name, content });
    onClose();
    onSuccess?.();
  } catch (error) {
    console.error(error);
    alert(error instanceof Error ? error.message : '업데이트 실패');
  }
};

export const handleKeychainDelete = async ({ id, onClose, onSuccess }: { id?: number; onClose: () => void; onSuccess?: () => void }) => {
  if (!id) {
    alert('삭제할 키체인을 찾을 수 없습니다.');
    return;
  }

  try {
    await patchKeyChainDelete(id);
    onClose();
    onSuccess?.();
  } catch (error) {
    console.error('삭제 오류:', error);
    alert(error instanceof Error ? error.message : '삭제 실패');
  }
};
