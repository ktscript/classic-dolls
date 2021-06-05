export function getApiUrl (config) {
  return typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.host}/api/`
    : `${config.defaultProtocol}//${config.defaultHost}/api/`
}
