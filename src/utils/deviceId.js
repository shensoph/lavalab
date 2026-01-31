const KEY = 'lavalab_device_id_v1';

export const getDeviceId = () => {
  const existing = localStorage.getItem(KEY);
  if(existing) return existing;

  const id = crypto?.randomUUID?.() || `dev_${Math.random().toString(16).slice(2)}${Date.now()}`;
  localStorage.setItem(KEY,id);
  return id;
};
