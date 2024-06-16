<?php declare(strict_types=1);

namespace GHSync\Subscriber;

use CzProject\GitPhp\GitException;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Core\Framework\Plugin\PluginEvents;
use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use CzProject\GitPhp\Git;
use Shopware\Core\System\SystemConfig\SystemConfigService;

class Trigger implements EventSubscriberInterface {
    private SystemConfigService $systemConfigService;
    protected LoggerInterface $logger;

    public function __construct(LoggerInterface $logger, SystemConfigService $systemConfigService) {
        $this->logger = $logger;
        $this->systemConfigService = $systemConfigService;
    }


    public static function getSubscribedEvents(): array
    {
        return [
            PluginEvents::PLUGIN_LOADED_EVENT => 'onPluginLoad',
        ];
    }

    public function onPluginLoad(EntityLoadedEvent $event): string
    {
        $url = $this->systemConfigService->get("GHSync.config.repUrl");
        $dir = $this->systemConfigService->get("GHSync.config.workDir");
        $remote = $this->systemConfigService->get("GHSync.config.remote");
        $git = new Git();
        try{
            $repo = $git->init($dir);
            $repo->setRemoteUrl($remote, $url);
            $repo->fetch($remote);
        } catch (GitException $e) {
            $this->logger->error($e->getMessage());
            return $e->getMessage();
        }
        return "OK!";
    }
}