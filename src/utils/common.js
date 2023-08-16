export const showToast = (params) => {
  uni.showToast({
    ...params,
    duration: params.duration || 2000
  });
};
