import { FakePullRequestSource } from '../src/fake-pull-request-source';

describe('Fake pull request source test', () => {
  it('should return empty result when no repos was passed', async () => {
    // Arrange
    const pullRequestSource = new FakePullRequestSource([]);

    // Act
    const openedPRs = await pullRequestSource.OpenPullRequest([]);

    // Assert
    expect(openedPRs).toEqual([]);
  });
});
