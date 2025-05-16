import deleteSshConnection from 'api/ssh-connections/ssh-delete';
import patchSshConnectionUpdate from 'api/ssh-connections/ssh-update';

/**커넥션 삭제 api 호출 핸들러 */
export const handleSshDelete = async (id: number, onClose: () => void, onSuccess?: () => void) => {
  if (!id) {
    alert('SSH 커넥션을 찾을 수 없습니다.');
    return;
  }

  try {
    await deleteSshConnection(id);
    onClose();
    onSuccess?.();
    /**삭제 성공 시 화면 재렌더링 */
    window.location.reload();
  } catch (error) {
    console.error('삭제 오류:', error);
    alert(error instanceof Error ? error.message : '삭제 실패');
  }
};

export const handleSshUpdate = async (id: number, inputValues: string[], onClose: () => void, onSuccess?: () => void) => {
  if (!id) {
    alert('수정할 키체인을 찾을 수 없습니다.');
    return;
  }

  const [name, host, port, username, keyChainName] = inputValues.map((v) => v.trim());
  const data = { name, host, port, username, keyChainName, id };

  try {
    await patchSshConnectionUpdate(data);
    onClose();
    onSuccess?.();
  } catch (error) {
    console.error(error);
    alert(error instanceof Error ? error.message : '업데이트 실패');
  }
};
