import { IIsMajorSemverTagOptions } from '@/model/git/semver/i-is-major-semver-tag-options';

/**
 * Check if a tag is a major semver tag
 * @example
 * isMajorSemverTag({ tag: '1' }) // true
 * isMajorSemverTag({ tag: 'v1' }) // true
 *
 * isMajorSemverTag({ tag: '1-beta.0' }) // false
 * isMajorSemverTag({ tag: '1.0' }) // false
 * isMajorSemverTag({ tag: 'v1.0' }) // false
 * isMajorSemverTag({ tag: '1.0.0' }) // false
 */
export function isMajorSemverTag({ tag }: IIsMajorSemverTagOptions): boolean {
  return /^v?\d+$/.test(tag);
}
