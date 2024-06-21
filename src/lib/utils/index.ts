import { Asset } from 'contentful'

export const generateUrlResource = (
  cfPhotoAsset: Asset,
  fallbackUrl: string,
): string => {
  const cfPhotoUrl = cfPhotoAsset?.fields?.file?.url as string | undefined
  if (cfPhotoUrl && cfPhotoUrl.includes('ctfassets.net')) {
    return `https:${cfPhotoUrl}`
  }
  return fallbackUrl
}
