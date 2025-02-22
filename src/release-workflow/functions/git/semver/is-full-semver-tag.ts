import { IIsFullSemverTagOptions } from '../../../model/git/semver/i-is-full-semver-tag-options';

/**
 * Check if a tag is a valid semver tag
 * @example
 * isFullSemverTag({ tag: '1.0.0' }) // true
 * isFullSemverTag({ tag: '1.0.0-beta.1' }) // true
 * isFullSemverTag({ tag: 'v1.0.0' }) // true
 *
 * isFullSemverTag({ tag: '1.0' }) // false
 * isFullSemverTag({ tag: '1' }) // false
 * isFullSemverTag({ tag: 'v1.0' }) // false
 * isFullSemverTag({ tag: 'v1' }) // false
 */
export function isFullSemverTag({ tag }: IIsFullSemverTagOptions): boolean {
  return /^(v)?\d+\.\d+(\.\d+)(-[0-9A-Za-z.-]+)?$/.test(tag);
}
